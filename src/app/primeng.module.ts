import { NgModule } from '@angular/core';

import { CheckboxModule } from 'primeng/checkbox';
import { AccordionModule } from 'primeng/accordion';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { PasswordModule } from 'primeng/password';
import { CardModule } from 'primeng/card';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MenubarModule } from 'primeng/menubar';
import { MegaMenuModule } from 'primeng/megamenu'
import { PanelMenuModule } from 'primeng/panelmenu';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { BadgeModule } from 'primeng/badge';
import { SidebarModule } from 'primeng/sidebar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DividerModule } from 'primeng/divider';
import { ScrollTopModule } from 'primeng/scrolltop';
import { PanelModule } from 'primeng/panel';
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
// import { EditorModule } from 'primeng/editor';
import { TabViewModule } from 'primeng/tabview';
import {DropdownModule} from 'primeng/dropdown';
import { MenuModule } from 'primeng/menu';
import { AvatarModule } from 'primeng/avatar';
import { ChartModule } from 'primeng/chart';
import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TagModule } from 'primeng/tag';

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin
]);

const modules = [
  CheckboxModule,
  AccordionModule,
  FileUploadModule,
  ButtonModule,
  InputTextModule,
  InputTextareaModule,
  InputNumberModule,
  PasswordModule,
  CardModule,
  MessagesModule,
  MessageModule,
  MenubarModule,
  MegaMenuModule,
  PanelMenuModule,
  ConfirmDialogModule,
  DialogModule,
  BadgeModule,
  SidebarModule,
  SelectButtonModule,
  DividerModule,
  ScrollTopModule,
  PanelModule,
  CarouselModule,
  GalleriaModule,
  ImageModule,
  TableModule,
  ToastModule,
  CalendarModule,
  SliderModule,
  MultiSelectModule,
  ContextMenuModule,
  // EditorModule,
  TabViewModule,
  DropdownModule,
  MenuModule,
  AvatarModule,
  ChartModule,
  DataViewModule,
  BreadcrumbModule,
  RadioButtonModule,
  TagModule,
  
  FullCalendarModule,
];

@NgModule({
  imports: modules,
  providers: [],
  exports: modules,
})

export class PrimengModule {}

