import { checkEndedLockdowns } from '@bot/src/helpers/Unlockdown';
import { Task } from '#structures/Task';
import type { DenkyClient } from '#types/Client';

export default class UnlockdownTask extends Task {
  constructor() {
    super();
    this.name = 'Check for ended lockdowns';
    this.delay = 5000;
    this.interval = null;
  }

  override run(client: DenkyClient) {
    if (!global.IS_MAIN_PROCESS) return;

    if (!client.isReady()) return;
    checkEndedLockdowns(client);
  }
}
