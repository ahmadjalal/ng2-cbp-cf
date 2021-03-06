﻿import { Portal }           from '@angular/cdk/portal';
import {
    EventEmitter,
    Injectable,
    Optional,
    SkipSelf,
}                           from '@angular/core';
import {
    BehaviorSubject,
    Observable,
}                           from 'rxjs';

import { LeftAction }       from './left-action.model';
import { Toolbar }          from './toolbar.model';

@Injectable()
export class ToolbarService {
    private _leftAction: BehaviorSubject<LeftAction | null | undefined> = new BehaviorSubject<LeftAction | null | undefined>(null);
    private _portal: BehaviorSubject<Portal<any> | null | undefined> = new BehaviorSubject<Portal<any> | null | undefined>(null);
    private _title: BehaviorSubject<string | null | undefined> = new BehaviorSubject<string | null | undefined>(null);
    private _sideNavOpened: EventEmitter<void> = new EventEmitter<void>();

    constructor() { }

    get leftAction(): Observable<LeftAction | null | undefined> {
        return this._leftAction.asObservable();
    }

    setLeftAction(newValue: LeftAction | null | undefined): void {
        this._leftAction.next(newValue);
    }

    get portal(): Observable<Portal<any> | null | undefined> {
        return this._portal.asObservable();
    }

    setPortal(newValue: Portal<any> | null | undefined): void {
        this._portal.next(newValue);
    }

    get title(): Observable<string | null | undefined> {
        return this._title.asObservable();
    }

    setTitle(newValue: string | null | undefined): void {
        this._title.next(newValue);
    }

    get sideNavOpened(): EventEmitter<void> {
        return this._sideNavOpened;
    }

    openSideNav(): void {
        this._sideNavOpened.emit();
    }

    set(newValue: Toolbar | null | undefined): void {
        if(newValue == null) {
            this.setLeftAction(null);
            this.setPortal(null);
            this.setTitle(null);
        } else {
            this.setLeftAction(newValue.leftAction);
            this.setPortal(newValue.portal);
            this.setTitle(newValue.title);
        }
    }
}

export function toolbarServiceProviderFactory(parent: ToolbarService): ToolbarService {
    return parent || new ToolbarService();
}

export const toolbarServiceProvider = {
    provide: ToolbarService,
    deps: [[new Optional(), new SkipSelf(), ToolbarService]],
    useFactory: toolbarServiceProviderFactory,
};
