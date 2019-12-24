
import { Vendor } from './vendor';
import { RegistrationService } from './../services/registration.service';
import { Component, OnInit } from '@angular/core';
import { vendorServices } from '../json/vendor-services';
import { vendor_type } from '../json/vendor-type';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

vendor = new Vendor();

placeList: any = [];
services = vendorServices;
vendors = vendor_type;
secondary_vendors = vendor_type;

latitude: any;
  longitude: any;
  city: any;
  state: any;
  country: any;
  pin_code: any;

designations = [
  {id: 1, name:"Admin"},
  {id: 2, name:"Manager"},
  {id: 3, name:"Assistant"},
 ];
 animals = [
  {id: 1, name:"Dog"},
  {id: 2, name:"Cat"},
  {id: 3, name:"Rabbit"},
 ];

  constructor(
    private regService: RegistrationService
  ) { }

  ngOnInit() {
  }


  deleteVendor(ev){
    console.log(ev);
    console.log(ev.target.textContent);
    this.secondary_vendors = [...this.vendors];
    this.secondary_vendors.forEach((elem, index) => {
      if (ev.target.textContent==elem.name) {
        this.secondary_vendors.splice(index, 1);
      }
    });
  }

  onFocusOut(ev){
    console.log(ev.target.value);
    let session_id:any;
    session_id="asda2341";
    console.log({ session_id:session_id, query: ev.target.value});
    this.regService.searchPlaces({session_id:session_id, query: ev.target.value}).subscribe(res => {
      console.log(res);
      this.placeList = res.predictions;
      console.log(this.placeList);
    });
  }

  fillData(predictions){
    console.log(predictions);
    this.vendor.address = predictions.description;
    this.placeList = [];
    this.regService.getLocation({session_id: "dadas", query: this.vendor.address}).subscribe(res => {
        console.log(res.results[0].geometry.location.lat);
        this.latitude = res.results[0].geometry.location.lat;
        this.longitude = res.results[0].geometry.location.lng;
        res.results[0].address_components.forEach(element => {
          console.log(element);
          if (element.types[0] == "locality") {
            console.log(element.long_name);
            this.city=element.long_name;
          }
          if (element.types[0] == "administrative_area_level_1") {
            console.log(element.long_name)
            this.state=element.long_name
          }
          if (element.types[0]=="country"){
            console.log(element.long_name);
            this.country=element.long_name;
          }
          if(element.types[0]=="postal_code"){
            console.log(element.long_name);
            this.pin_code = element.long_name;
          }
        })
      })
  }

 addVendor(vendor_reg) {
   this.vendor.lat = this.latitude;
   this.vendor.long = this.longitude;
   this.vendor.city  = this.city;
   this.vendor.state = this.state;
   this.vendor.country = this.country;
   this.vendor.pincode = this.pin_code;
   console.log(this.vendor);

  //  vendor_reg.reset()
; }


}
