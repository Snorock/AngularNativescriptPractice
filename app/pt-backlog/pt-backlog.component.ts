import { Component, OnInit } from '@angular/core';

import { BacklogService } from '../services/backlog.service';

@Component({
    selector: 'pt-backlog',
    templateUrl: './pt-backlog/pt-backlog.component.html'
})

export class PtBacklogComponent implements OnInit {
    constructor(private backlogService: BacklogService) { }

    ngOnInit() { }
}