import { container } from "tsyringe";

import IRepositoryFactory from "./business/factories/IRepositoryFactory";
import RepositoryFactoryMongo from "./business/factories/RepositoryFactoryMongo";

container.register<IRepositoryFactory>("RepositoryFactory", {
  useClass: RepositoryFactoryMongo
});
