class Ajax {
    getDataFromServer = async(url) => {
        try {
            const response = await fetch(url,{method:'POST'})
            if (response.ok) {
                let json = await response.json()
                return json
            }
            else {
                alert("Ошибка HTTP:" + response.status)
            }
        }
        catch(e) {
            console.log(e)
        }
    }

    post(url, callback) {
        let xhr = new XMLHttpRequest()
        xhr.open('POST', url)
        xhr.send()

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                const data = JSON.parse(xhr.response)
                callback(data)
            }
        }
    }
}

export const ajax = new Ajax();