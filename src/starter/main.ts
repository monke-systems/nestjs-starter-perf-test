import {
  createStarterApp,
  initStarterApp,
  startStarterApp,
} from '@monkee/nestjs-starter';
import { AppConfig } from './app.config';
import { AppModule } from './app.module';

export const main = async () => {
  const app = await createStarterApp(AppModule);

  await initStarterApp(app, AppConfig);

  await startStarterApp(app, AppConfig);
};
