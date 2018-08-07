import { Component, OnInit } from '@angular/core';

import { BacklogService } from '../../services/backlog.service';

import { ItemTypeEnum, StatusEnum, PriorityEnum } from '../../shared/static-data';
import { PTDomain } from '../../typings/domain';
import IPTItem = PTDomain.IPTItem;

@Component({
    selector: 'pt-item-list',
    templateUrl: './pt-backlog/pt-item-list/pt-item-list.component.html',
    styleUrls: ['./pt-backlog/pt-item-list/pt-item-list.component.css']
})

export class PTItemListComponent implements OnInit {
    public ptItems: IPTItem[];
    constructor(private backlogService: BacklogService) { }

    ngOnInit() {
        this.ptItems = this.backlogService.items;
    }

    public listItemTap(args: any) {
        let lv = args.object;
        let item = lv.items[args.index];
        alert(item.title);
    }

    public getIndicatorClass(item: IPTItem) {
        return ItemTypeEnum.getIndicatorClass(item.type);
    }
}


