import { container } from "tsyringe";

import IRepositoryFactory from "./business/factories/IRepositoryFactory";
import RepositoryFactoryInMemory from "./business/factories/RepositoryFactoryInMemory";

container.register<IRepositoryFactory>("RepositoryFactory", {
  useClass: RepositoryFactoryInMemory
});
