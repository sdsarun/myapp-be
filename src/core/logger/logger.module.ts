import { Module } from "@nestjs/common";
import { LoggerModule as PinoLoggerModule } from 'nestjs-pino';
import { randomUUID as uuidv4 } from "node:crypto";

@Module({
  imports: [
    PinoLoggerModule.forRoot({
      pinoHttp: {
        level: "debug",
        genReqId(req) {
          return req.headers['x-correlation-id'] || uuidv4()
        },
        transport: {
          targets: [
            {
              level: 'info', // ⛔ Only show info and above
              target: 'pino-pretty',
              options: {
                colorize: true,
                translateTime: 'SYS:standard',
                ignore: 'pid,hostname',
              },
            },
          ],
        }
        // transport: {
        //   targets: [
        //     {
        //       level: "debug",
        //       target: "pino-pretty",
        //       options: {
        //         colorize: true,
        //         // singleLine: true,
        //         translateTime: 'SYS:standard',
        //         ignore: 'pid,hostname',
        //       }
        //     },
        //   ],
        // },
      }
    })
  ]
})
export class LoggerModule { }
