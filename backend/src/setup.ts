import { container } from "tsyringe";

import IRepositoryFactory from "./model/factories/IRepositoryFactory";
import RepositoryFactoryMongo from "./model/factories/RepositoryFactoryMongo";

container.register<IRepositoryFactory>("RepositoryFactory", {
  useClass: RepositoryFactoryMongo
});
