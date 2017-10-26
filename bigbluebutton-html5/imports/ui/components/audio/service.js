import Users from '/imports/api/users';
import Auth from '/imports/ui/services/auth';
import AudioManager from '/imports/api/audio/client/manager';
import Meetings from '/imports/api/meetings';

const init = () => {
  const userId = Auth.userID;
  const User = Users.findOne({ userId });
  const username = User.name;
  const Meeting = Meetings.findOne({ meetingId: User.meetingId });
  const voiceBridge = Meeting.voiceProp.voiceConf;

  // FIX ME
  const microphoneLockEnforced = false;

  const userData = {
    userId,
    username,
    voiceBridge,
    microphoneLockEnforced,
  };

  AudioManager.init(userData);
};

const exitAudio = () => AudioManager.exitAudio();
const joinListenOnly = () => AudioManager.joinAudio(true);
const joinMicrophone = () => AudioManager.joinAudio(false);

export default {
  init,
  exitAudio,
  joinListenOnly,
  joinMicrophone,
};
