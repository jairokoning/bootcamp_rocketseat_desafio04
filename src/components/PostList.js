import React, { Component } from 'react';
import Post from './Post';
import AvatarA from '../assets/avatar-1.jpg';
import AvatarAa from '../assets/avatar-1-1.jpg';
import AvatarB from '../assets/avatar-2.jpg';
import AvatarBa from '../assets/avatar-2-1.jpg';
import AvatarBc from '../assets/avatar-2-2.jpg';
import AvatarC from '../assets/avatar-3.jpg';
import AvatarCa from '../assets/avatar-3-1.jpg';
import AvatarCb from '../assets/avatar-3-2.jpg';
import AvatarCc from '../assets/avatar-3-3.jpg';
import profile from '../assets/profile-avatar.jpg';

class PostList extends Component{
  state = {
    posts: [
      {      
        id: 1,
        author: {
          name: 'Julia Gaby',
          avatar: AvatarA
        },
        date: '04 Jun 2019',
        content: 'What is Lorem Ipsum? Can someone tell me a little about this subject?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Everton Fabres',
              avatar: AvatarAa
            },
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
          }
        ],               
      },
      {      
        id: 2,
        author: {
          name: 'Lucas Tanaka',
          avatar: AvatarB
        },
        date: '07 Jun 2019',
        content: 'I like to use Lorem Ipsum, but I have a question. Where does it come from?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Iasmin Moura',
              avatar: AvatarBa
            },
            content: "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC."
          },
          {
            id: 2,
            author: {
              name: 'Bianca Galvão',
              avatar: AvatarBc
            },
            content: "This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32."
          },
        ],               
      },
      {      
        id: 3,
        author: {
          name: 'Eduardo Trento',
          avatar: AvatarC
        },
        date: '08 Jun 2019',
        content: 'Why do we use it, and Where can I get some?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Miriam Vargas',
              avatar: AvatarCa
            },
            content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          },
          {
            id: 2,
            author: {
              name: 'Gilberto Velez',
              avatar: AvatarCb
            },
            content: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
          },
          {
            id: 3,
            author: {
              name: 'Jean Roitter',
              avatar: AvatarCc
            },
            content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
          },          
        ],               
      }
    ]
  }

  render() {
    return (
      <div className="container">
        <div className="content">
          {this.state.posts.map(post => <Post key={post.id} data={post} />)}
        </div>
      </div>
    );
  } 
}

export default PostList;