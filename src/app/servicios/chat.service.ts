import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  Firestore,
  getDoc,
  getDocs,
  updateDoc,
  where,
} from '@angular/fire/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/database';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Usuario } from '../clases/usuario';
import { Router } from '@angular/router';
import { Chat } from '../clases/chat';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  mail: any;
  //user$: Observable<User | null>;

  constructor(
    private firestore: Firestore,
    private authSvc: AuthService,
    private router: Router
  ) {}

  addChatMessage(msg: string) {}

  getChatMessages() {}

  private getUsers() {}
  private getUserForMsg(msgFromId: any, users: Usuario[]) {}
}
