import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-registration-landing',
    templateUrl: './registration-landing.component.html',
    styleUrls: [ './registration-landing.component.scss' ],
})
export class RegistrationLandingComponent implements OnInit {
    constructor() {}

    cardData = [
        {
            image: '../../../../../assets/images/registration/employee.png',
            title: 'طالب العمل',
            description: `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد`,
            button: 'سجّل كطالب للعمل',
            link: 'user',
        },
        {
            image: '../../../../../assets/images/registration/recruiter.png',

            title: 'مدير الموارد البشرية',
            description: `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد`,
            button: 'سجل كمدير الموارد البشرية',
            link: 'recruiter',
        },
        {
            image: '../../../../../assets/images/registration/companies.png',

            title: 'الشركات والجهات',
            description: `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد`,
            button: 'سجّل كشركة أو جهة',
            link: 'company',
        },
    ];

    ngOnInit(): void {}
}
