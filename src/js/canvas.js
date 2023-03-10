import Game from "./components/Game";
import Player from "./components/Player";
import Controller from "./components/Controller";
import ContextManager from "./components/ContextManager";
import ImageManager from "./components/ImageManager";
import EventManager from "./components/EventManager";
import PlayerCustomizer from "./components/PlayerCustomizer";
import Depression from "./components/Depression";
import CollisionManager from "./components/CollisionManager";
import Menu from "./components/Menu";

let currentGame = new Game (
    Player,
    PlayerCustomizer,
    Controller,
    ContextManager,
    ImageManager,
    EventManager,
    Depression,
    CollisionManager,
    Menu,
);

