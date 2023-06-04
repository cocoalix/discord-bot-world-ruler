# worldruler

the discord server deployed on Microsoft Azure

## how to develop

開発のしかた (やってみたいひとむけ)

### web-side

web上の操作が必要なものです

### create discord bot on discord developer portal

discord botをdiscord開発者ポータルで作成します

下記参考リンクの `とりあえずアプリケーションとbotの作成` までが参考になります

必ず `client id` と `client secret` は控えておいてください

[参考](https://qiita.com/tan/items/d876fca53615e5dba85b)

### local-side

ローカルマシン上で用意しないといけないものです

### 1. install git

バージョン管理ソフト `git` をインストールしてください

#### パッケージマネージャを使う場合

##### winget (windows)

```pwsh
winget install Git.Git
```

##### chocolatey (windows)

```pwsh
choco install git
```

##### Homebrew (macOS)

1. install from brew

Homebrewからインストールします

```zsh
brew install git
```

2. check version

バージョンを確認します

```zsh
git --version
```

> ```zsh
> git version 2.24.3 (Apple Git-128)
> ```

3. update `.zshrc`

`.zshrc`(ズーイッシュアールシー)を更新します

```zsh
echo "PATH=/usr/local/bin/git:$PATH" >> ~/.zshrc
```

4. reload shell

シェルを再起動します

```zsh
exec $SHELL -l
```

5. check version again

再度バージョンを確認します

`Apple Git` の文言が消えていれば問題ないです

```zsh
git --version
```

> ```zsh
> git version 2.24.3
> ```

##### apt (debian/linux)

```bash
sudo apt install -y git
```

##### yam (debian/linux)

```bash
sudo yum install -y git
```

### 2. install node.js and npm

botプログラムの実行環境 `node.js` と、botプログラムが依存しているパッケージマネージャ `npm` をインストールしてください

#### インストーラを使う場合

[ここから取得してください](https://nodejs.org/ja)

##### winget (windows)

```pwsh
winget install OpenJS.NodeJS.LTS
```

##### chocolatey (windows)

```pwsh
choco install nodejs-lts
```

##### Homebrew (macOS)

```zsh
brew install nodejs
```

##### apt (debian/linux)

```bash
sudo apt install -y nodejs npm
```

##### yam (debian/linux)

```bash
sudo yum install -y nodejs npm
```

### 3. clone this repos

このリポジトリをクローンします

```sh
git clone <this_repos_url>
```

### 4. exec `npm i`

依存ライブラリをローカルプロジェクトにインストールします

```sh
npm i
```

### 5. copy `.env.default` to `.env.dev` and replace placeholders in `.env.dev`

`.env.default` をコピーし、 `.env.dev` という名前にし、仲のデータを適切な値に置き換えます

### 6. exec `npm run dev`

開発モードで実行します

そのままエラーなく動作すれば問題ありません

```sh
npm run dev
```

また、そのままの状態でBOTを招待したサーバで `!time` と打ってみます

現在時刻が返されれば、うまく動作しています

## create and run unittest



## deploy to Azure

