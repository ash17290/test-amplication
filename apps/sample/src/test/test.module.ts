import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TestModuleBase } from "./base/test.module.base";
import { TestService } from "./test.service";

@Module({
  imports: [TestModuleBase, forwardRef(() => AuthModule)],
  providers: [TestService],
  exports: [TestService],
})
export class TestModule {}
