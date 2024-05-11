import { main as refMain } from './reference/main';
import { main as starterMain } from './starter/main';

const { APP_ENTRY = 'reference' } = process.env;

const main = async () => {
  if (APP_ENTRY === 'reference') {
    refMain();
  }

  if (APP_ENTRY === 'starter') {
    await starterMain();
  }
};

main().catch(console.error);
