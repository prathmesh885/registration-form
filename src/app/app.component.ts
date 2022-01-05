import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  addForm= new FormGroup({
    cname: new FormControl('',Validators.required),
    iaddress: new FormControl('',Validators.required),
    street: new FormControl('',Validators.required),
    city: new FormControl('',Validators.required),
    postcode: new FormControl('',Validators.required),
    inputCity: new FormControl('',Validators.required),
    vat: new FormControl('',Validators.required),
    vatNumber: new FormControl('',Validators.required),
    note: new FormControl('',Validators.required),
    userName: new FormControl('',Validators.required),
    firstName: new FormControl('',Validators.required),
    middletName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    phone : new FormControl(
      null,
      [
        Validators.required,
        Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
      ]),
    message : new FormControl('',Validators.required),
    electricity: new FormControl('',Validators.required),
    gas: new FormControl('',Validators.required),
    electricity1: new FormControl('',Validators.required),
    gas1: new FormControl('',Validators.required),
    electricity2: new FormControl('',Validators.required),
    gas2: new FormControl('',Validators.required)
  })

  ngOnInit() {
    
  }
  // clicksub() {
  //   console.log(this.addForm.value);
  //   this.addForm.reset();
  // }
  get cname() {
    return this.addForm.get('cname');
  }
  get iaddress() {
    return this.addForm.get('iaddress');
  }
  get street() {
    return this.addForm.get('street');
  }
  get city() {
    return this.addForm.get('city');
  }
  get postcode() {
    return this.addForm.get('postcode');
  }
  get inputCity() {
    return this.addForm.get('inputCity');
  }
  get vat() {
    return this.addForm.get('vat');
  }
  get vatNumber() {
    return this.addForm.get('vatNumber');
  }
  get note() {
    return this.addForm.get('note');
  }
  get userName() {
    return this.addForm.get('firstName');
  }
  get firstName() {
    return this.addForm.get('firstName');
  }
  get middletName() {
    return this.addForm.get('middletName');
  }
  get lastName() {
    return this.addForm.get('lastName');
  }
  get email() {
    return this.addForm.get('email');
  }
  get phone() {
    return this.addForm.get('phone');
  }
  get message() {
    return this.addForm.get('message');
  }
  get electricity() {
    return this.addForm.get('electricity');
  }
  get gas() {
    return this.addForm.get('Gas');
  }
  get electricity1() {
    return this.addForm.get('electricity1');
  }
  get gas1() {
    return this.addForm.get('Gas1');
  }
  get electricity2() {
    return this.addForm.get('electricity2');
  }
  get gas2() {
    return this.addForm.get('gas2');
  }
  

  ////////////////////////////////////
  up:Boolean=true;
  down:Boolean=false;
  u(){
    this.up=true;
    this.down=false;
  }
  d(){
    this.up=false;
    this.down=true;
  }
  data:any=[];
  deleteMessage = "Do you really want to delete";
  successMessage = "";
  fun(){
    console.log("Hi");
    if(this.company_name==null||
      this.house_no==null||
      this.street_add==null||
      this.city_add==null||
      this.post_code==null||
      this.vat_n==null||
      this.vat_no==null||
      this.hold_commision==null||
      this.user_name==null||
      this.fname==null||
      this.middle_name==null||
      this.last_name==null||
      this.email_co==null||
      this.mob_no==null||
      this.no_days==null||
      this.electricity_unit_charges_electricity==null||
      this.electricity_unit_charges_gas==null||
      this.standing_chrages_electricty==null||
      this.standing_charges_gas==null||
      this.discount_perc_electricity==null||
      this.discount_perc_gas==null){
      this.check=true;
    }else{
      this.data.push({
        company_name:this.company_name,
        house_no:this.house_no,
        street_add:this.street_add,
        city_add:this.city_add,
        post_code:this.post_code,
        vat_n:this.vat_n,
        vat_no:this.vat_no,
        hold_commision:this.hold_commision,
        user_name:this.user_name,
        fname:this.fname,
        middle_name:this.middle_name,
        last_name:this.last_name,
        email_co:this.email_co,
        mob_no:this.mob_no,
        no_days:this.no_days,
        electricity_unit_charges_electricity:this.electricity_unit_charges_electricity,
        electricity_unit_charges_gas:this.electricity_unit_charges_gas,
        standing_chrages_electricty:this.standing_chrages_electricty,
        standing_charges_gas:this.standing_charges_gas,
        discount_perc_electricity:this.discount_perc_electricity,
        discount_perc_gas:this.discount_perc_gas
      });
      this.check=false;
      // this.data.reset()
      confirm("Thank you for submitting response "+ this.company_name);
      console.log(this.data);
      this.blank();
      
      // this.checkout
      this.addForm.reset();
    }
    
    
  }
  check:boolean=false;
  company_name:String=null;
  house_no:Number=null;
  street_add:String=null;
  city_add:String=null;
  post_code:Number=null;
  vat_n:Number=null;
  vat_no:Number=null;
  hold_commision:String=null;
  user_name:String=null;
  fname:String=null;
  middle_name:String=null;
  last_name:String=null;
  email_co:String=null;
  mob_no:Number=null;
  no_days:Number=null;
  electricity_unit_charges_electricity:Number=null;
  electricity_unit_charges_gas:Number=null;
  standing_chrages_electricty:Number=null;
  standing_charges_gas:Number=null;
  discount_perc_electricity:Number=null;
  discount_perc_gas:Number=null;
  // Blanck
  blank(){
    this.company_name=null;
    this.house_no=null;
    this.street_add=null;
    this.city_add=null;
    this.post_code=null;
    this.vat_n=null;
    this.vat_no=null;
    this.hold_commision=null;
    this.user_name=null;
    this.fname=null;
    this.middle_name=null;
    this.last_name=null;
    this.email_co=null;
    this.mob_no=null;
    this.no_days=null;
    this.electricity_unit_charges_electricity=null;
    this.electricity_unit_charges_gas=null;
    this.standing_chrages_electricty=null;
    this.standing_charges_gas=null;
    this.discount_perc_electricity=null;
    this.discount_perc_gas=null;
  }
  delCon:Boolean;
  delete(d:any){
    if (confirm(this.deleteMessage) == true) {
      this.delCon = true;
    } else {
      this.delCon = false;
    }
    console.log("Hi "+this.delCon);
    if(this.delCon==true){
      this.data.splice(d,1);
    }
    else{
      return;
    }
  }
  edit(){
    this.u()
  }
}
