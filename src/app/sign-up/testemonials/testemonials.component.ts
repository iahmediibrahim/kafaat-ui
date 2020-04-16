import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-testemonials',
    templateUrl: './testemonials.component.html',
    styleUrls: [ './testemonials.component.scss' ],
})
export class TestemonialsComponent implements OnInit {
    testemonials = [
        {
            name: 'خالد الخالد',
            title: 'عضو في كفاءات منذ أكتوبر 2019',
            testemonial: 'فريق متميز يمتلك الخبرة والمعرفة ويحقق الطموحات بشكل عصري إبداعي منفرد بلمسات ذهبية',
        },
        {
            name: 'أحمد ابراهيم',
            title: 'عضو في كفاءات منذ أكتوبر 2019',
            testemonial: 'فريق متميز يمتلك الخبرة والمعرفة ويحقق الطموحات بشكل عصري إبداعي منفرد بلمسات ذهبية',
        },
        {
            name: 'خالد الخالد',
            title: 'عضو في كفاءات منذ أكتوبر 2019',
            testemonial: 'فريق متميز يمتلك الخبرة والمعرفة ويحقق الطموحات بشكل عصري إبداعي منفرد بلمسات ذهبية',
        },
        {
            name: 'أحمد ابراهيم',
            title: 'عضو في كفاءات منذ أكتوبر 2019',
            testemonial: 'فريق متميز يمتلك الخبرة والمعرفة ويحقق الطموحات بشكل عصري إبداعي منفرد بلمسات ذهبية',
        },
    ];
    constructor() {}

    ngOnInit(): void {}
}
