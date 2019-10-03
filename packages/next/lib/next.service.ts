import {
  IncomingMessage,
  ServerResponse,
} from 'http';
import Server from 'next/dist/next-server/server/next-server';

export class NextService {
  private app!: Server;

  public setApp(app: Server): void {
    this.app = app;
  }

  public getApp(): Server {
    return this.app;
  }

  public async render(page: string, req: IncomingMessage, res: ServerResponse): Promise<void>

  public async render(page: string, data: any, req: IncomingMessage, res: ServerResponse): Promise<void>

  public async render(page: string, arg2: any, arg3: any, arg4?: any): Promise<void> {
    if (this.isIncomingMessage(arg2)) {
      await this.app.render(arg2, arg3, page);
    } else {
      await this.app.render(arg3, arg4, page, arg2);
    }
  }

  private isIncomingMessage(arg: any): arg is IncomingMessage {
    return typeof (arg as IncomingMessage).httpVersion === 'string';
  }
}
