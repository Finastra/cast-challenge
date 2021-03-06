import { ProxyModuleOptions, ProxyModuleOptionsFactory } from '@finastra/nestjs-proxy';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ProxyConfigService implements ProxyModuleOptionsFactory {
  readonly logger = new Logger(ProxyConfigService.name);

  constructor(private configService: ConfigService) {}

  createModuleConfig(): ProxyModuleOptions {
    const services = [
      {
        id: 'FIO_GQL_ENDPOINT',
        url: this.configService.get('FIO_GQL_ENDPOINT'),
      },
    ];

    this.logger.log(services);

    return {
      services,
    };
  }
}
