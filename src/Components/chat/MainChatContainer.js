import { nanoid } from "nanoid";
import {
  BasicStorage,
  ChatProvider,
  ExampleChatService,
  AutoDraft
} from "@chatscope/use-chat";
import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, Sidebar, Search, ChatContainer, ConversationList, MessageList, Conversation, Message, MessageInput, ConversationHeader, VideoCallButton, SendButton, InputToolbox, AttachmentButton, TypingIndicator, Avatar, VoiceCallButton, MessageSeparator, InfoButton } from '@chatscope/chat-ui-kit-react';
import more from "../../images/more-vertical.svg";
import moreo from "../../images/more-vertical-orange.svg";
import "./chat.css"
import favorite from "../../images/Favorit.svg"
import call from "../../images/phone-call.svg"
import profile from "../../images/Avatar.svg"
import cards from "../../images/cards.svg"
import pluscircle from "../../images/plus-circle.svg"
import bold from "../../images/bold.svg"
import italic from "../../images/italic.svg"
import underline from "../../images/underline.svg"
import eraser from "../../images/eraser.svg"
import smile from "../../images/Smiles Button.svg"
import attachment from "../../images/attachment.svg"
import image from "../../images/menu-bar__button.svg"
import video from "../../images/video.svg"

export const MainChatContainer = () => {
  return (
    <div style={{ position: "relative", height: "500px" }}>
      <MainContainer>
        <Sidebar position="left" scrollable={false}>
          <div className="d-flex justify-content-between px-2 py-3 align-items-center ">
            <h3 className="fw-bold">Chats</h3>
            <div><img src={more} alt="" /></div>
          </div>
          <Search placeholder="Search..." />
          <h5 className="fw-bold text-left px-3 ">Queued</h5>
          <ConversationList>
            <Conversation name="Lilly" lastSenderName="Lilly" info="Yes i can do it for you">
              <Avatar name="Lilly" status="available" src={profile} />
            </Conversation>
            <Conversation name="Lilly" lastSenderName="Lilly" info="Yes i can do it for you">
              <Avatar name="Lilly" status="available" src={profile} />
            </Conversation>
            <h5 className="fw-bold text-left px-3 ">Chats</h5>
            <Conversation name="Lilly" lastSenderName="Lilly" info="Yes i can do it for you">
              <Avatar name="Lilly" status="available" src={profile} />
            </Conversation>
            <Conversation name="Lilly" lastSenderName="Lilly" info="Yes i can do it for you">
              <Avatar name="Lilly" status="available" src={profile} />
            </Conversation>  <Conversation name="Lilly" lastSenderName="Lilly" info="Yes i can do it for you">
              <Avatar name="Lilly" status="available" src={profile} />
            </Conversation>
            <Conversation name="Lilly" lastSenderName="Lilly" info="Yes i can do it for you">
              <Avatar name="Lilly" status="available" src={profile} />
            </Conversation>
          </ConversationList>
        </Sidebar>
        <ChatContainer
          style={{
            height: '500px'
          }}
        >
          <ConversationHeader>
            <Avatar
              name="Emily"
              src="https://chatscope.io/storybook/react/assets/emily-xzL8sDL2.svg"
              status="available"
            />
            <ConversationHeader.Content className="">
              <p className="cs-conversation-header__content cs-conversation-header__user-name align-content-center  " >Sophie Okonedo </p>
            </ConversationHeader.Content>

            <ConversationHeader.Actions>
              <img src={call} className="cs-button cs-button--videocall" alt="" />
              <VideoCallButton />
              <img src={moreo} className="cs-button cs-button--videocall" alt="" />
              <InfoButton />
            </ConversationHeader.Actions>
          </ConversationHeader>
          <MessageList>
            <MessageSeparator content="Saturday, 30 November 2019" />
            <Message
              model={{
                direction: 'incoming',
                message: 'Hello my friend',
                position: 'single',
                sender: 'Emily',
                sentTime: '15 mins ago'
              }}
            >
              <Avatar
                name="Emily"
                src="https://chatscope.io/storybook/react/assets/emily-xzL8sDL2.svg"
              />
            </Message>
            <Message
              model={{
                direction: 'outgoing',
                message: 'Hello my friend',
                position: 'single',
                sender: 'Oliver',
                sentTime: '15 mins ago'
              }}
            />
            <Message
              avatarSpacer
              model={{
                direction: 'incoming',
                message: 'Hello my friend',
                position: 'first',
                sender: 'Emily',
                sentTime: '15 mins ago'
              }}
            />
            <Message
              avatarSpacer
              model={{
                direction: 'incoming',
                message: 'Hello my friend',
                position: 'normal',
                sender: 'Emily',
                sentTime: '15 mins ago'
              }}
            />
            <Message
              avatarSpacer
              model={{
                direction: 'incoming',
                message: 'Hello my friend',
                position: 'normal',
                sender: 'Emily',
                sentTime: '15 mins ago'
              }}
            />
            <Message
              model={{
                direction: 'incoming',
                message: 'Hello my friend',
                position: 'last',
                sender: 'Emily',
                sentTime: '15 mins ago'
              }}
            >
              <Avatar
                name="Emily"
                src="https://chatscope.io/storybook/react/assets/emily-xzL8sDL2.svg"
              />
            </Message>
            <Message
              model={{
                direction: 'outgoing',
                message: 'Hello my friend',
                position: 'first',
                sentTime: '15 mins ago'
              }}
            />
            <Message
              model={{
                direction: 'outgoing',
                message: 'Hello my friend',
                position: 'normal',
                sentTime: '15 mins ago'
              }}
            />
            <Message
              model={{
                direction: 'outgoing',
                message: 'Hello my friend',
                position: 'normal',
                sentTime: '15 mins ago'
              }}
            />
            <Message
              model={{
                direction: 'outgoing',
                message: 'Hello my friend',
                position: 'last',
                sentTime: '15 mins ago'
              }}
            />
            <Message
              avatarSpacer
              model={{
                direction: 'incoming',
                message: 'Hello my friend',
                position: 'first',
                sender: 'Emily',
                sentTime: '15 mins ago'
              }}
            />
            <Message
              model={{
                direction: 'incoming',
                message: 'Hello my friend',
                position: 'last',
                sender: 'Emily',
                sentTime: '15 mins ago'
              }}
            >
              <Avatar
                name="Emily"
                src="https://chatscope.io/storybook/react/assets/emily-xzL8sDL2.svg"
              />
            </Message>
            <MessageSeparator content="Saturday, 31 November 2019" />
            <Message
              model={{
                direction: 'incoming',
                message: 'Hello my friend',
                position: 'single',
                sender: 'Emily',
                sentTime: '15 mins ago'
              }}
            >
              <Avatar
                name="Emily"
                src="https://chatscope.io/storybook/react/assets/emily-xzL8sDL2.svg"
              />
            </Message>
            <Message
              model={{
                direction: 'outgoing',
                message: 'Hello my friend',
                position: 'single',
                sender: 'Oliver',
                sentTime: '15 mins ago'
              }}
            />
            <Message
              avatarSpacer
              model={{
                direction: 'incoming',
                message: 'Hello my friend',
                position: 'first',
                sender: 'Emily',
                sentTime: '15 mins ago'
              }}
            />
            <Message
              avatarSpacer
              model={{
                direction: 'incoming',
                message: 'Hello my friend',
                position: 'normal',
                sender: 'Emily',
                sentTime: '15 mins ago'
              }}
            />
            <Message
              avatarSpacer
              model={{
                direction: 'incoming',
                message: 'Hello my friend',
                position: 'normal',
                sender: 'Emily',
                sentTime: '15 mins ago'
              }}
            />
            <Message
              model={{
                direction: 'incoming',
                message: 'Hello my friend',
                position: 'last',
                sender: 'Emily',
                sentTime: '15 mins ago'
              }}
            >
              <Avatar
                name="Emily"
                src="https://chatscope.io/storybook/react/assets/emily-xzL8sDL2.svg"
              />
            </Message>
            <Message
              model={{
                direction: 'outgoing',
                message: 'Hello my friend',
                position: 'first',
                sentTime: '15 mins ago'
              }}
            />
            <Message
              model={{
                direction: 'outgoing',
                message: 'Hello my friend',
                position: 'normal',
                sentTime: '15 mins ago'
              }}
            />
            <Message
              model={{
                direction: 'outgoing',
                message: 'Hello my friend',
                position: 'normal',
                sentTime: '15 mins ago'
              }}
            />
            <Message
              model={{
                direction: 'outgoing',
                message: 'Hello my friend',
                position: 'last',
                sentTime: '15 mins ago'
              }}
            />
            <Message
              avatarSpacer
              model={{
                direction: 'incoming',
                message: 'Hello my friend',
                position: 'first',
                sender: 'Emily',
                sentTime: '15 mins ago'
              }}
            />
            <Message
              model={{
                direction: 'incoming',
                message: 'Hello my friend',
                position: 'last',
                sender: 'Emily',
                sentTime: '15 mins ago'
              }}
            >
              <Avatar
                name="Emily"
                src="https://chatscope.io/storybook/react/assets/emily-xzL8sDL2.svg"
              />
            </Message>
          </MessageList>
          <MessageInput
            placeholder="Type message here"
            attachButton={false}
            sendButton={false}

          />

          <InputToolbox className="px-5 py-2 d-flex justify-content-between ">
            <div>
              <img src={bold} className="cs-button rounded-0 " alt="" />
              <img src={italic} className="cs-button rounded-0 " alt="" />
              <img src={underline} className="cs-button rounded-0 " alt="" />
              <img src={eraser} className="cs-button rounded-0 " alt="" />
              <img src={smile} className="cs-button rounded-0 " alt="" />
              <img src={attachment} className="cs-button rounded-0 " alt="" />
              <img src={image} className="cs-button rounded-0 " alt="" />
              <img src={video} className="cs-button rounded-0 " alt="" />
            </div>
            <div>
              <img src={cards} className="cs-button rounded-0" alt="" />
              <img src={pluscircle} className="cs-button rounded-0 " alt="" />
            </div>


          </InputToolbox>
        </ChatContainer>
      </MainContainer>
    </div>
  );
};
