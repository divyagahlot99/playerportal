import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PlayerService } from '../player.service';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

    constructor(private api: PlayerService) { }
    private url: any = "http://localhost:3000/python/api"
    ngOnInit(): void {
        this.getPlayersFromServer();
    }

    ngOnChanges(): void {
        this.getPlayersFromServer();
    }

    formSubmission(data: any) {

        console.log(data);
        this.newPlayer(data);
        setTimeout(() =>{
            this.getPlayersFromServer();
        }, 30);
        
    }

    formSubmission2(data: any) {
        console.log(this.getBoilerplate(this.url))

    }

    getBoilerplate(url: any) {
        this.api.getBoilerplate(url)
            .subscribe(res => {
                console.log(res)
            })
    }

    profileForm = new FormGroup({
        playerName: new FormControl(""),
        playerCountry: new FormControl(""),
        totalMatchesPlayed: new FormControl("")
    })

    public playerData:any;
    public rowData:any;

    getPlayersFromServer() {
        console.log("Yahoo")
        this.api.getPlayer()
        .subscribe(res => {
            this.playerData = res;
            this.rowData = this.playerData;
        })
    }

    newPlayer(player:any) {
        this.api.postPlayer(player)
        .subscribe(
            (res:any) => {
                console.log("Request to Supervisor raised. Log:" + res)
            }
        )
    }
}
