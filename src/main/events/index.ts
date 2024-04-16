import { defaultDownloadsPath } from "@main/constants";
import { app, ipcMain } from "electron";

import "./catalogue/get-catalogue";
import "./catalogue/get-game-shop-details";
import "./catalogue/get-how-long-to-beat";
import "./catalogue/get-random-game";
import "./catalogue/search-games";
import "./hardware/get-disk-free-space";
import "./library/delete-game-folder";
import "./library/get-game-by-object-id";
import "./library/get-library";
import "./library/get-repackers-friendly-names";
import "./library/open-game";
import "./library/remove-game";
import "./misc/get-or-cache-image";
import "./misc/open-external-url";
import "./misc/show-open-dialog";
import "./torrenting/cancel-game-download";
import "./torrenting/pause-game-download";
import "./torrenting/resume-game-download";
import "./torrenting/start-game-download";
import "./user-preferences/get-user-preferences";
import "./user-preferences/update-user-preferences";

ipcMain.handle("ping", () => "pong");
ipcMain.handle("getVersion", () => app.getVersion());
ipcMain.handle("getDefaultDownloadsPath", () => defaultDownloadsPath);
