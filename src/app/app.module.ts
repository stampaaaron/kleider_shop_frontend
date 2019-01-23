import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { HttpClientModule }    from '@angular/common/http';
import { ClothesListComponent } from './pages/user/clothes-list/clothes-list.component';

import { ApiService } from "./service/api.service";
import { IconComponent } from './Components/icon/icon.component';
import { IconButtonComponent } from './Components/icon-button/icon-button.component';
import { ClothesItemComponent } from './pages/user/clothes-list/clothes-item/clothes-item.component';
import { ClothesDetailComponent } from './pages/user/clothes-detail/clothes-detail.component';
import { PageContainerComponent } from './Components/page-container/page-container.component';
import { HorizontalDividerComponent } from './Components/horizontal-divider/horizontal-divider.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    ClothesListComponent,
    IconComponent,
    IconButtonComponent,
    ClothesItemComponent,
    ClothesDetailComponent,
    PageContainerComponent,
    HorizontalDividerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
