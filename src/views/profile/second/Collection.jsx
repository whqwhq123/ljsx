import React, { useEffect, useState } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { useHistory } from 'react-router-dom'
import { Contain, List } from './Collection.styled.js'
import { get } from "@u/http";


const AboutUs = (props) => {
  const coll = {
    "collection": [
      {
        "title": '小白菜正当季，生鲜物美价廉，详情请戳链接',
        "com_num": "123456",
        "view_num": "123",
        "pic": [
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603691670910&di=1766cd630a0749a7918a7363f7ef4dc6&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2Fe1%2Fm9%2FQJ8890494426.jpg"
        ],
        "link": ""
      },
      {
        "title": '小白菜正当季，生鲜物美价廉，详情请戳链接',
        "com_num": "123456",
        "view_num": "123",
        "pic": [
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603691670910&di=1766cd630a0749a7918a7363f7ef4dc6&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2Fe1%2Fm9%2FQJ8890494426.jpg"
        ],
        "link": ""
      },
      {
        "title": '小白菜正当季，生鲜物美价廉，详情请戳链接',
        "com_num": "123456",
        "view_num": "123",
        "pic": [
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603691670910&di=1766cd630a0749a7918a7363f7ef4dc6&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2Fe1%2Fm9%2FQJ8890494426.jpg"
        ],
        "link": ""
      },
      {
        "title": '小白菜正当季，生鲜物美价廉，详情请戳链接',
        "com_num": "123456",
        "view_num": "123",
        "pic": [
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603691670910&di=1766cd630a0749a7918a7363f7ef4dc6&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2Fe1%2Fm9%2FQJ8890494426.jpg"
        ],
        "link": ""
      },
      {
        "title": '小白菜正当季，生鲜物美价廉，详情请戳链接',
        "com_num": "123456",
        "view_num": "123",
        "pic": [
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603691670910&di=1766cd630a0749a7918a7363f7ef4dc6&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2Fe1%2Fm9%2FQJ8890494426.jpg"
        ],
        "link": ""
      },
      {
        "title": '小白菜正当季，生鲜物美价廉，详情请戳链接',
        "com_num": "123456",
        "view_num": "123",
        "pic": [
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603691670910&di=1766cd630a0749a7918a7363f7ef4dc6&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2Fe1%2Fm9%2FQJ8890494426.jpg"
        ],
        "link": ""
      },
      {
        "title": '小白菜正当季，生鲜物美价廉，详情请戳链接',
        "com_num": "123456",
        "view_num": "123",
        "pic": [
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603691670910&di=1766cd630a0749a7918a7363f7ef4dc6&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2Fe1%2Fm9%2FQJ8890494426.jpg"
        ],
        "link": ""
      },
      {
        "title": '小白菜正当季，生鲜物美价廉，详情请戳链接',
        "com_num": "123456",
        "view_num": "123",
        "pic": [
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603691670910&di=1766cd630a0749a7918a7363f7ef4dc6&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2Fe1%2Fm9%2FQJ8890494426.jpg"
        ],
        "link": ""
      }
    ]
  }
  /* const [coll, setColl] = useState();
  useEffect(() => {
    (async () => {
      let ru = await get("/api/collection")
      setColl(ru)
    })()
  }, []) */

  const history = useHistory();

  return (
    <Contain>
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => history.push('/')
        }
      >我的收藏</NavBar>
      <List>
        {
          coll ? coll.collection.map((item, index) => {
            return <li key={item + index}>
              <p>{item.title}</p>
              <span>
                {item.view_num}
              </span>
              <span>
                {item.com_num}
              </span>
              <svg t="1604386596193" className="icon1" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4779" width="20" height="20">
                <path d="M512.008 720.89c153.372 0 361.412-156.754 375.879-199.842-5.646-47.207-201.438-217.93-375.879-217.93-165.943 0-375.989 135.977-376.003 218.968 4.363 40.887 205.933 198.804 376.003 198.804m0 41.79c-174.252 0-417.764-163.986-417.764-240.232 0-120.811 244.973-261.127 417.764-261.127 189.079 0 417.748 183.75 417.748 261.127 0 64.36-249.942 240.232-417.748 240.232" p-id="4780" fill="#aaaaaa"></path><path d="M512.008 616.429c57.562 0 104.429-46.884 104.429-104.429 0-57.575-46.867-104.445-104.429-104.445-57.576 0-104.445 46.87-104.445 104.445 0 57.545 46.869 104.429 104.445 104.429m0 41.791c-80.783 0-146.244-65.438-146.244-146.22 0-80.774 65.461-146.236 146.244-146.236 80.768 0 146.235 65.462 146.235 146.236 0 80.782-65.468 146.22-146.235 146.22" p-id="4781" fill="#aaaaaa"></path>
              </svg>
              <svg t="1604386989474" className="icon2" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7458" width="14" height="14">
                <path d="M255.218 358.333c-35.291 0-63.903 29.674-63.903 66.29 0 36.619 28.613 66.291 63.903 66.291 35.291 0 63.903-29.674 63.903-66.291 0-36.615-28.613-66.29-63.903-66.29zM510.835 358.333c-35.291 0-63.903 29.674-63.903 66.29 0 36.619 28.614 66.291 63.903 66.291s63.903-29.674 63.903-66.291c0-36.615-28.614-66.29-63.903-66.29zM766.451 358.333c-35.291 0-63.904 29.674-63.904 66.29 0 36.619 28.614 66.291 63.904 66.291s63.903-29.674 63.903-66.291c0-36.615-28.614-66.29-63.903-66.29zM894.257 26.894h-766.846c-70.582 0-127.807 59.363-127.807 132.581v497.158c0 73.219 58.506 140.71 130.709 140.71h194.769c33.949 36.165 174.458 181.635 174.458 181.635 6.24 6.49 16.35 6.49 22.59 0 0 0 102.876-116.638 169.902-181.635h199.324c72.205 0 130.71-67.492 130.71-140.71v-497.158c0-73.218-57.227-132.581-127.809-132.581zM958.163 656.635c0 36.604-30.705 75.013-66.806 75.013h-196.017c-23.744 0-45.089 24.417-45.089 24.417l-137.637 142.755-137.606-142.755c0 0-26.212-24.417-48.676-24.417h-196.017c-36.102 0-66.805-38.411-66.805-75.013v-497.158c0-36.618 28.613-66.292 63.903-66.292h766.846c35.291 0 63.905 29.676 63.905 66.292v497.158z" p-id="7459" fill="#aaaaaa"></path>
              </svg>
              <img src={item.pic[0]} alt="" />
            </li>
          }) : null
        }
        <h1>
          已经到底了
          </h1>
      </List>
    </Contain>

  );
}

export default AboutUs;