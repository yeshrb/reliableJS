/**
 * Created by ljj on 2016/12/25.
 */

MyApp = {};

MyApp.diContainer = new DiContainer();

MyApp.diContainer.register(
    'Service',
    [],
    function () {
        return new ConferenceWebSvc();
    }
);

MyApp.diContainer.register();
