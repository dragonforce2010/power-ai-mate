import { Component, PropsWithChildren } from 'react'
import { View, Text } from '@tarojs/components'
import './index.less'
import MyComp from 'src/pages/component/test-comp'
import ChatProUI from 'src/pages/chat/chat-gpt/chat-pro-screen'

export default class Index extends Component<PropsWithChildren> {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return <div>
      {/* <div>hello world</div> */}
      <ChatProUI></ChatProUI>
    </div>
  }
}
