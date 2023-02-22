var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.greeting = function () {
        console.log('Hello there!');
    };
    return UserService;
}());
var Injector = /** @class */ (function () {
    function Injector(providers) {
        if (providers === void 0) { providers = []; }
        var _this = this;
        this.providers = providers;
        this.container = new Map();
        this.providers.forEach(function (service) {
            _this.container.set(service, new service());
        });
    }
    Injector.prototype.get = function (service) {
        var serviceInstance = this.container.get(service);
        if (!serviceInstance) {
            throw new Error("No provider for class ".concat(service));
        }
        return serviceInstance;
    };
    return Injector;
}());
var myComponent = /** @class */ (function () {
    function myComponent(userService) {
        this.userService = userService;
    }
    return myComponent;
}());
var injectorInst = new Injector([UserService]);
var myComponentInst = new myComponent(injectorInst.get(UserService));
myComponentInst.userService.greeting();
