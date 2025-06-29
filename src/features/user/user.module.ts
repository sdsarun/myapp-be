import { Module } from "@nestjs/common";
import { UserController } from "src/features/user/user.controller";
import { UserService } from "src/features/user/user.service";

@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}