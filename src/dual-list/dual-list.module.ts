﻿import { CommonModule }         from '@angular/common';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { MatButtonModule }      from '@angular/material/button';
import { MatIconModule }        from '@angular/material/icon';

import { ListGroupModule }      from '../list-group';
import { DualListComponent }    from './dual-list.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatIconModule,
        ListGroupModule,
    ],
    exports: [
        DualListComponent,
    ],
    declarations: [
        DualListComponent,
    ],
})
export class DualListModule {
}
