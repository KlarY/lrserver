export class CreateReminderDTO {

    readonly _id: string;

    readonly title: string;

    readonly create_time: string;

    readonly owner: string;

    readonly description: string;

    readonly location: string;

    readonly pic: string;

    readonly location_pic: string;

    readonly shared_users: object;
}