import React, {useRef, useState} from 'react';
import Counter from "./component/Counter";
import ClassCounter from "./component/ClassCounter";
import "./styles/App.css";
import PostItem from "./component/PostItem";
import PostList from "./component/PostList";
import MyButton from "./component/UI/button/MyButton";
import MyInput from "./component/UI/input/MyInput";
import PostForm from "./component/PostForm";
import MySelect from "./component/UI/select/MySelect";

function App(compareFn) {
    const [posts, setPosts] = useState([
        {id: 1, title: 'AJavascript', body: 'BDescription'},
        {id: 2, title: 'CJavascript 2', body: 'CDescription'},
        {id: 3, title: 'BJavascript 3', body: 'ADescription'},
    ])

    const [selectedSort,setSelectedSort] = useState('')

    function getSortedPosts() {
        console.log('Alert Function')
        if(selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
        }
        return posts;
    }

    const [searchQuery, setSearchQuery] = useState('')

    const nana=0;
    const sortedPosts = getSortedPosts()


    const createPost =(newPost)=>{
        setPosts([...posts, newPost])
    }
    //Получаем пост из дочернего компонента
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort);

    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <div>
                <MyInput
                    value={searchQuery}
                    onChange={e=>setSearchQuery(e.target.value)}
                    placeholder="Search..."
                />
            <MySelect
                value={setSelectedSort}
                onChange={sortPosts}
                defaultValue = "Sorting by"
                options={[
                    {value: 'title', name: 'Header'},
                    {value: 'body', name: 'Description'}
                ]}
            />
            </div>
            {posts.length !== 0
                ?<PostList remove={removePost} posts={sortedPosts} title="List of posts JS"/>
                :<h1 style={{textAlign: 'center'}}>Post not found</h1>
            }

        </div>
    );
}

export default App;
