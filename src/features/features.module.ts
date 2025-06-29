import { Module } from "@nestjs/common";
import { UserModule } from "src/features/user/user.module";

@Module({
  imports: [
    UserModule
  ]
})
export class FeaturesModule {}