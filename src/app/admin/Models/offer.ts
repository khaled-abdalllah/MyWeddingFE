import {OfferDetails} from '../Models/offer-details'
export class Offer {
      Id :number;
      OfferName :string;
      ValidFrom :string;
      ValidTo :Date;
      Price:number;
      EventType_ID:number;
      OfferDetail:OfferDetails[];
      SelectedItem:number;
      //ChosenItem:number=0;
}
