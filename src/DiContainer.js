/**
 * Created by lijunjie on 16/12/24.
 */
'use strict';
export class DiContainer {

    constructor() {
        this.registrations = [];
    };

    register(name, dependencies, func1) {
        var ix;
        if (typeof name !== 'string'
            || !Array.isArray(dependencies)
            || typeof func1 !== 'function') {
            throw new Error(this.messages.registerRequiesArgs);
        }
        for (ix = 0; ix < dependencies.length; ix++) {
            if (typeof dependencies[ix] !== 'string') {
                throw new Error(this.messages.registerRequiesArgs);
            }
        }
        this.registrations[name] = {dependencies: dependencies, func: func1};
    };

    get messages() {
        return {
            registerRequiesArgs: 'The register function require three arguments: ' +
            'a string,an array of strings,and a function.'
        }
    }

    get(name) {
        var registration = this.registrations[name];
        var self = this;
        var dependencies = [];
        if (registration == undefined) {
            return undefined;
        }
        registration.dependencies.forEach(function (dependencyName) {
            var dependency = self.get(dependencyName);
            dependencies.push(dependency === undefined ? undefined : dependency);
        });
        return registration.func.apply(undefined, dependencies);


    }



}



