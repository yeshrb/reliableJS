DiContainer = function () {
    this.registrations = [];

};
DiContainer.prototype.messages = {
    registerRequiesArgs: 'The register function requires three arguments: ' +
    'a string,an array of strings,and a function.'
};

DiContainer.prototype.register = function (name, dependencies, func) {
    if (typeof name !== 'string'
        || !Array.isArray(dependencies)
        || typeof func !== 'function') {
        throw new Error(this.messages.registerRequiesArgs);
    }

    for (let ix = 0; ix < dependencies.length; ix++) {
        if (typeof dependencies[ix] !== 'string') {
            throw new Error(this.messages.registerRequiesArgs);
        }
    }
    this.registrations[name] =
    {dependencies: dependencies, func: func};

};

DiContainer.prototype.get = function (name) {
    let self = this;
    let registration = this.registrations[name];
    let dependencies = [];
    if (registration === undefined) {
        return undefined;
    }
    registration.dependencies.forEach(function (dependencyName) {
        let dependency = self.get(dependencyName);
        dependencies.push(dependencyName === undefined ? undefined : dependency);
    });


    return registration.func.apply(undefined, dependencies);
};