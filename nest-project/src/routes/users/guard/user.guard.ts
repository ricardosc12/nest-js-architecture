import { CanActivate, createParamDecorator, ExecutionContext, Injectable, SetMetadata, UnauthorizedException, UseGuards } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { User } from '../schema/users.schema';
import { AbilityUserService, Action } from '../ability/user.ability';

@Injectable()
export class AbilityGuard implements CanActivate {
    constructor(
        private reflector: Reflector,
        private abilityService: AbilityUserService
    ) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {

        const action =
            this.reflector.get<Action>(
                CHECK_POLICIES_KEY,
                context.getHandler(),
            );

        if (!action) {
            return true
        }

        const req = context.switchToHttp().getRequest();

        const ability = this.abilityService.check(req.user)
        const rules = ability.relevantRuleFor(action, User)

        if (!rules) {
            throw new UnauthorizedException({ message: "Usuário não autorizado!" })
        }

        req.fields = rules.fields

        return true
    }
}


export const CHECK_POLICIES_KEY = 'check_policy';

export const CheckPolicies = (action: Action) =>
    SetMetadata(CHECK_POLICIES_KEY, action);

