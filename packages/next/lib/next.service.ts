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

  public async render(page: string, req: IncomingMessage, res: ServerResponse): Promise<void> {
    await this.app.render(req, res, page);
  }

  public async renderWithData(page: string, data: any, req: IncomingMessage, res: ServerResponse): Promise<void> {
    await this.app.render(req, res, page, data);
  }
}
