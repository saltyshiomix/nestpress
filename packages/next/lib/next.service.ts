import {
  IncomingMessage,
  ServerResponse,
} from 'http';
import Server from 'next/dist/next-server/server/next-server';

export class NextService {
  private app!: Server;

  public setApp(app: Server) {
    this.app = app;
  }

  public getApp(): Server {
    return this.app;
  }

  public render(page: string, req: IncomingMessage, res: ServerResponse) {
    this.app.render(req, res, page);
  }

  public renderWithData(page: string, data: any, req: IncomingMessage, res: ServerResponse) {
    this.app.render(req, res, page, data);
  }
}
