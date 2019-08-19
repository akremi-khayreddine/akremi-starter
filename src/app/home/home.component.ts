import {
  Component,
  OnInit,
  HostListener,
  ViewChild,
  ElementRef,
  AfterViewInit
} from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { tileLayer, latLng, circle, polygon } from "leaflet";
import * as L from 'leaflet';
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild("stickyMenu", { static: true }) menuElement: ElementRef;

  sticky = false;
  elementPosition: any;

  form: FormGroup;

  layersControl = {
    baseLayers: {
      "Open Street Map": tileLayer(
        "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        { maxZoom: 18, attribution: "..." }
      ),
      "Open Cycle Map": tileLayer(
        "http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png",
        { maxZoom: 18, attribution: "..." }
      )
    },
    overlays: {
      "Big Circle": circle([46.95, -122], { radius: 5000 }),
      "Big Square": polygon([
        [46.8, -121.55],
        [46.9, -121.55],
        [46.9, -121.7],
        [46.8, -121.7]
      ])
    }
  };
  // Open Street Map Definition
  LAYER_OSM = {
    id: "openstreetmap",
    name: "Open Street Map",
    enabled: false,
    layer: L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution: "Open Street Map"
    })
  };
  // Values to bind to Leaflet Directive
  layersControlOptions = { position: "bottomright" };
  baseLayers = {
    "Open Street Map": this.LAYER_OSM.layer
  };
  options = {
    zoom: 13,
    center: L.latLng([46.879966, -121.726909])
  };

  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null)
    });
  }

  ngAfterViewInit() {
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }

  @HostListener("window:scroll", ["$event"])
  handleScroll(event) {
    const windowScroll = window.pageYOffset;
    if (windowScroll >= 500) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }
}
