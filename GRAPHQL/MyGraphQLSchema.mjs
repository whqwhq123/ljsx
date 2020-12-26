import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,

  GraphQLNonNull
} from 'graphql';

import axios from 'axios'



var DetailsplType = new GraphQLObjectType({
  name: 'DetailsplType',
  fields: {
    gid: {
      type: GraphQLInt

    },
    gr_id: {
      type: GraphQLInt
    },
    gr_flag: {
      type: GraphQLInt
    },
    comm_id: {
      type: GraphQLInt
    },
    petname: {
      type: GraphQLString
    },
    msg: {
      type: GraphQLString
    },
    uport: {
      type: GraphQLString
    }
  }
})
var GuessType = new GraphQLObjectType({
  name: 'GuessType',
  fields: {
    gid: {
      type: GraphQLInt
    },
    gname: {
      type: GraphQLString
    },
    gnum: {
      type: GraphQLInt
    },
    gpicture: {
      type: GraphQLString
    },
    gprice: {
      type: GraphQLInt
    },
    gweight: {
      type: GraphQLInt
    },

  }
})
var DetailsxqType = new GraphQLObjectType({
  name: 'DetailsxqType',
  fields: {
    gnum: {
      type: GraphQLInt
    },
    gid: {
      type: GraphQLInt
    },
    iid: {
      type: GraphQLInt
    },
    iintro: {
      type: GraphQLString
    },
    ipicture: {
      type: new GraphQLList(GraphQLString)
    },
    code: {
      type: GraphQLInt
    },
    imgUrl: {
      type: GraphQLString
    },
    gprice: {
      type: GraphQLInt
    },
    gweight: {
      type: GraphQLInt
    },
    petname: {
      type: GraphQLString
    },
    uport: {
      type: GraphQLString
    },
    answer: {
      type: GraphQLString
    },
    cflag: {
      type: GraphQLInt
    },
    commId: {
      type: GraphQLInt
    },
    commTime: {
      type: GraphQLString
    },
    fresh: {
      type: GraphQLString
    },
    gid: {
      type: GraphQLInt
    },
    msg: {
      type: GraphQLString
    },
    taste: {
      type: GraphQLString
    },
    uid: {
      type: GraphQLInt
    },
    guess: {
      type: new GraphQLList(GuessType),
      async resolve() {
        let result = await axios(`http://39.97.248.187:8080/shop-1.0-SNAPSHOT/goods/guess`)
        console.log(result.data.guess.slice(0, 3));

        return result.data.guess.slice(0, 3)

      }

    }
  }
})

var MessageType = new GraphQLObjectType({
  name: 'MessageType',
  fields: {
    message: {
      type: GraphQLString
    },
    code: {
      type: GraphQLInt
    }
  }
})




var CommentType = new GraphQLObjectType({
  name: 'CommentType',
  fields: {
    answer: {
      type: GraphQLString
    },
    cflag: {
      type: GraphQLString
    },
    commId: {
      type: GraphQLString
    },
    commPic: {
      type: GraphQLString
    },
    commTime: {
      type: GraphQLString
    },
    fresh: {
      type: GraphQLString
    },
    gid: {
      type: GraphQLString
    },
    msg: {
      type: GraphQLString
    },
    taste: {
      type: GraphQLString
    },
    uid: {
      type: GraphQLString
    },
  }
})

var CommontType = new GraphQLObjectType({
  name: 'CommontType',
  fields: {
    petname: {
      type: GraphQLString
    },
    uport: {
      type: GraphQLString
    },
    iRank: {
      type: GraphQLString
    },
    comment: {
      type: CommentType,
      async resolve(obj, args) {
        return obj.comment

      }

    },


  }

})
var CeType = new GraphQLObjectType({
  name: 'CeType',
  fields: {
    aTaste: {
      type: GraphQLString
    },
    aFresh: {
      type: GraphQLString
    },
    code: {
      type: GraphQLString
    }
  }

})

var DetailsplAllType = new GraphQLObjectType({
  name: 'DetailsplAllType',
  fields: {

    ce: {
      type: CeType,
      async resolve(obj, args) {
        return obj
      }
    },
    commont: {
      type: new GraphQLList(CommontType),
      args: {
        cflag: {
          type: GraphQLInt
        },
        gid: {
          type: GraphQLInt
        },

        offset: {
          type: GraphQLInt
        },
      },
      async resolve(obj, args) {
        let result = await axios(`http://39.97.248.187:8080/shop-1.0-SNAPSHOT/comm/findAll?gid=${args.gid}&offset=${args.offset}&count=10&cflag=${args.cflag}`)

        return result.data.comments

      }

    }
  }
})









var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {

      detailspl: {
        type: new GraphQLList(DetailsplType),
        async resolve() {
          let result = await axios('http://localhost:3000/resule')
          console.log(result);
          return result.data
        }
      },
      detailsxq: {
        type: DetailsxqType,
        args: {
          gid: {
            type: GraphQLInt
          }
        },
        async resolve(obj, args) {
          // let result = await axios(`http://39.97.248.187:8080/shop-1.0-SNAPSHOT/goods/queryPrice?gid=${args.gid}`)
          let result = await axios(`http://39.97.248.187:8080/shop-1.0-SNAPSHOT/intro/findByGid?gid=${args.gid}`)
          // console.log(result.data);
          let resultpre = await axios(`http://39.97.248.187:8080/shop-1.0-SNAPSHOT/goods/queryPrice?gid=${args.gid}`)
          let ipicture = JSON.parse(result.data.intro.ipicture);
          let imgUrl = ipicture.splice(0, 1)
          // console.log(imgUrl[0]);
          // console.log(resultpre.data);

          // let result2 = await axios(`http://39.97.248.187:8080/shop-1.0-SNAPSHOT/goods/guess`)
          // console.log(result2.data.guess.slice(0, 3));
          let resultpl = await axios(`http://39.97.248.187:8080/shop-1.0-SNAPSHOT/comm/findAll?gid=${args.gid}&offset=1&count=1&cflag=1`)
          // console.log(resultpl.data.comments[0].comment);
          let comment = resultpl.data.comments[0].comment
          console.log(comment);
          let objs = {
            ...result.data.intro,
            gnum: result.data.gnum,
            code: result.data.code,
            ipicture,
            imgUrl: imgUrl[0],
            gprice: resultpre.data.price,
            gweight: resultpre.data.weight,
            petname: resultpl.data.comments[0].petname,
            uport: resultpl.data.comments[0].uport,
            resultpl: resultpl.data.comments[0].comment,
            answer: comment.answer,
            cflag: comment.cflag,
            commId: comment.commId,
            commTime: comment.commTime.split(" ")[1].slice(0, 5),
            fresh: comment.fresh,
            gid: comment.gid,
            msg: comment.msg,
            taste: comment.taste,
            uid: comment.uid,

            // guess: result2.data.guess.slice(0, 3)
          }
          return objs
        }
      },
      detailsAllpl: {
        type: DetailsplAllType,

        args: {
          gid: {
            type: GraphQLInt
          }
        },
        async resolve(obj, args) {
          let result = await axios(`http://39.97.248.187:8080/shop-1.0-SNAPSHOT/comm/rank?gid=${args.gid}`)

          return result.data


        }
      }
    },
  }),
  mutation: new GraphQLObjectType({
    name: "RootMutationType",
    fields: {
      insertdetailspl: {
        type: MessageType,
        args: {
          id: {
            type: GraphQLInt
          },
          gid: {
            type: GraphQLInt

          },
          gr_id: {
            type: GraphQLInt
          },
          gr_flag: {
            type: GraphQLInt
          },
          comm_id: {
            type: GraphQLInt
          },
          petname: {
            type: GraphQLString
          },
          msg: {
            type: GraphQLString
          },
          uport: {
            type: GraphQLString
          }
        },
        async resolve(obj, args) {
          await axios.post('http://localhost:3000/resule', { ...args })

          return {
            message: "数据添加成功.",
            code: 1
          }
        }
      }
    }
  })
})



export default schema