import { createMongoAbility, AbilityBuilder, AbilityClass, ExtractSubjectType, InferSubjects, MongoAbility, Ability } from "@casl/ability";
import { Inject, Injectable } from "@nestjs/common";
import { User, UserSchema } from "src/routes/users/schema/users.schema";

export enum Action {
    Manage = 'manage',
    Create = 'create',
    Read = 'read',
    Update = 'update',
    Delete = 'delete',
}

type Subjects = InferSubjects<User | typeof User> | 'all';

export type AppAbility = MongoAbility<[Action, Subjects]>;

@Injectable()
export class CaslAbilityFactory {
    createForUser(user: User) {
        const { can, cannot, build } = new AbilityBuilder<AppAbility>(createMongoAbility);

        if (user.username == "admin") {
            can(Action.Manage, 'all');
        } else {
            can(Action.Read, User);
        }
        return build({
            detectSubjectType: (item) => {
                return item.constructor as ExtractSubjectType<Subjects>
            }
        });
    }
}