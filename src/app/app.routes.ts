import { Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path:'header',
        component:HeaderComponent
    },
    {
        path:'',
        component:HomeComponent

    },
    {
        path:'contact',
        component:ContactComponent
    },
    {
        path:'blog',
        component:BlogComponent
    },
    {
        path:'footer',
        component:FooterComponent
    }
];
