
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CampaignComponent} from "./campaign.component";
import {ZoomComponent} from "../zoom/zoom.component";

@NgModule({
  imports: [
    FormsModule
  ],
  declarations: [
    CampaignComponent,
    ZoomComponent
  ],
})
export class CampaignModule {}
