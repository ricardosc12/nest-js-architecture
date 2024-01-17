import { AbilityBuilder, InferSubjects, MongoAbility, createMongoAbility, defineAbility } from "@casl/ability";
import { User } from "../schema/users.schema";

export enum Action {
    Manage = 'manage',
    Create = 'create',
    Read = 'read',
    Update = 'update',
    Delete = 'delete',
}

// type Subjects = InferSubjects<typeof User> | 'all';

// export type AppAbility = MongoAbility<[Action, Subjects]>;

export class AbilityUserService {
    check(user: User) {

        return defineAbility((can) => {
            if (user.username === 'admin') {
                can(Action.Manage, User);
            } else {
                can(Action.Read, User, ['username']);
            }

            if (user.username == 'rick') {
                can(Action.Create, User)
            }
            // can(Action.Manage, User, { username: 'admin' });
            // can(Action.Read, User, ['username']);
        })


        // const { can, cannot, build } = new AbilityBuilder<AppAbility>(createMongoAbility);

        // can(Action.Manage, User, { username });

        // if (user.username === 'admin') {
        //     can(Action.Manage, User);
        // } else {
        //     can(Action.Read, User, ['username']);
        // }

        // if (user.username == 'rick') {
        //     can(Action.Create, User, {})
        // }

        // return build()
    }
}
