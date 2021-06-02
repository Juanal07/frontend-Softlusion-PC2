import { Component, OnInit} from '@angular/core';
import { CommonsService } from 'src/app/services/commons.service';
import { AdminService } from 'src/app/services/admin.service';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {

  public data: any[];
  public data1: any[];
  public data2: any[];
  public toolbar: string[];
  public selectOptions: Object;
  public editSettings: Object;
  // public initialPage: Object;

    constructor(
      private commonsService: CommonsService,
      private adminService: AdminService,
    ) {
    }

    public ngOnInit(): void {
      this.getUser() 
      this.getMunicipios()
      this.getRankingActivos()
      // this.initialPage = { pageSize: 10, pageCount: 2 };
      this.toolbar = ['Search'];
  }

  getUser() {
    this.adminService.getUsers().subscribe(
      (response) => {
        console.log('response is ', response);
        this.data = response['data'];
      },
      (error) => {
        console.log('error is ', error);
      }
    );
  }

  getMunicipios() {
    this.adminService.getMunicipiosMasBuscados().subscribe(
      (response) => {
        console.log('response is ', response);
        this.data1 = response['data'];
      },
      (error) => {
        console.log('error is ', error);
      }
    );
  }

  getRankingActivos() {
    this.adminService.getRankingActivos().subscribe(
      (response) => {
        console.log('response is ', response);
        this.data2 = response['data'];
      },
      (error) => {
        console.log('error is ', error);
      }
    );
  }
}