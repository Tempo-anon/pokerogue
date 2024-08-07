import BattleScene from "../../battle-scene";
import { Mode } from "../ui";
"#app/inputs-controller.js";
import AbstractSettingsUiHandler from "./abstract-settings-ui-handler";
import { Setting, SettingType } from "#app/system/settings/settings";

export default class SettingsAudioUiHandler extends AbstractSettingsUiHandler {
  /**
   * Creates an instance of SettingsAudioUiHandler.
   *
   * @param scene - The BattleScene instance.
   * @param mode - The UI mode, optional.
   */
  constructor(scene: BattleScene, mode: Mode | null = null) {
    super(scene, mode);
    this.title = "Audio";
    this.settings = Setting.filter(s => s.type === SettingType.AUDIO);
    this.localStorageKey = "settings";
    this.rowsToDisplay = 4;
  }
}
