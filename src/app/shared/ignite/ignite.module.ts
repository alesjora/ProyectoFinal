import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IgxButtonModule,
  IgxIconModule,
  IgxLayoutModule,
  IgxNavigationDrawerModule,
  IgxRadioModule,
  IgxRippleModule,
  IgxSwitchModule,
  IgxToggleModule,
  IgxNavbarModule,
  IgxAvatarModule,
IgxFilterModule,
IgxListModule,
IgxForOfModule,
  IgxInputGroupModule,
  IgxDatePickerModule,
  IgxAutocompleteModule,
  IgxDropDownModule,
  IgxTimePickerModule
} from "igniteui-angular";

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [IgxButtonModule,
    IgxIconModule,
    IgxLayoutModule,
    IgxNavigationDrawerModule,
    IgxRadioModule,
    IgxRippleModule,
    IgxSwitchModule,
    IgxToggleModule,
    IgxNavbarModule,
    IgxAvatarModule,
    IgxFilterModule,
    IgxListModule,
    IgxForOfModule,
    IgxInputGroupModule,
    IgxDatePickerModule,
    IgxAutocompleteModule,
    IgxDropDownModule,
    IgxTimePickerModule]
})
export class IgniteModule { }
