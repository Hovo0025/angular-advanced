class UserService {
  greeting(): void {
    console.log('Hello there!');
  }
}

class Injector {
  private container = new Map();

  constructor(private providers: any[] = []) {
    this.providers.forEach((service) => {
      this.container.set(service, new service());
    });
  }

  get(service: any): any {
    const serviceInstance = this.container.get(service);
    if (!serviceInstance) {
      throw new Error(`No provider for class ${service}`);
    }
    return serviceInstance;
  }
}

class myComponent {
  constructor(public userService: UserService) {}
}

const injectorInst = new Injector([UserService]);
const myComponentInst = new myComponent(injectorInst.get(UserService));

myComponentInst.userService.greeting();
