<template>
	<div class="mi-address">
		<div class="content-wrapper" v-show="!isPop">
			<div class="page-top">
				<span class="title">收货地址</span>
				<img src="../../assets/images/back.png" alt=""
				     @click="$router.push({ path: $route.query.back, query: { ids: $route.query.ids } })"/>
			</div>

			<div class="page-content no" v-if="addressList.length === 0">
				<div class="no-result">
					<img src="../../assets/images/address/no_result_address.png" alt="" />
					<span>您还没有收货地址，请点击下方+新建</span>
				</div>
			</div>

			<div class="page-content yes" v-else>
				<ul class="address">
					<li v-for="item in addressList" :key="item.id" >
						<div class="main" @click="changeDefault(item)">
							<div class="top">
								<span class="name" v-text="item.receiveName"></span>
								<span class="phone" v-text="item.receivePhone"></span>
							</div>
							<div class="bottom">
								<span class="default" v-show="item.isDefault === 1">默认</span>
								<span class="detail-address" v-text="`${ item.receiveRegion } ${ item.receiveDetail }`"></span>
							</div>
						</div>
						<div class="edit">
							<img src="../../assets/images/address/icon_edit_gray.png" alt="" @click="updateAddress(item)"/>
						</div>
					</li>
				</ul>
			</div>

			<div class="page-footer">
				<span @click="addAddress">+ 添加地址</span>
			</div>
		</div>

		<div class="pop-content-wrapper" v-show="isPop">
			<div class="pop-top">
				<span class="title">新增地址</span>
				<img src="../../assets/images/back.png" alt="" @click="backList"/>
			</div>
			<div class="pop-content">
				<form class="content">
					<div class="name-wrapper">
						<span class="name">收货人姓名</span>
						<input type="text" placeholder="请输入收货人姓名" v-model="edit.newAddress.receiveName"/>
					</div>
					<div class="phone-wrapper">
						<span class="phone">手机号码</span>
						<input type="text" placeholder='请输入手机号' class="input-phone" v-model="edit.newAddress.receivePhone"/>
					</div>
					<div class="address-wrapper">
						<span class="address">所在地区</span>
						<input type="text" placeholder=''v-model="edit.newAddress.receiveRegion"/>
					</div>
					<div class="detail-address-wrapper">
						<span class="detail-address">街道地址</span>
						<input type="text" placeholder='请输入街道地址' class="input-address" v-model="edit.newAddress.receiveDetail"/>
					</div>

					<div class="set-default" v-show="edit.isAdd" @click="setDefault">
						<img src="../../assets/images/icon_uncheck.png" alt=""  class="unchecked" v-show="edit.nowDefault === 0"/>
						<img src="../../assets/images/icon_check_red.png" alt="" class="checked" v-show="edit.nowDefault === 1"/>
						<span class="text">设置默认地址</span>
					</div>
					<div class="btn-delete" v-show="edit.isUpdate" @click="deleteAddress">
						<span>删除收货地址</span>
					</div>
					<div class="btn-wrapper">
						<span class="btn-save" @click="saveAddress">保存</span>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
        export default {
                name: 'Address',
                data: function() {
                        return {
                                addressList: [],		// 获取当前用户的所有地址
                                edit: {
                                        isAdd: false,			// 判断是不是新增状态
                                        isUpdate: false			,// 是不是修改状态
                                        newAddress: {			 //	新增收货地址
                                                id: 0,
                                                receiveName: '',
                                                receivePhone: '',
                                                receiveRegion: '',
                                                receiveDetail: '',
                                                isDefault: 0
                                        },
                                        nowDefault: 0
                                },
                                isPop: false				// 控制隐藏页面是否弹出
                        };
                },
                methods: {
                        addAddress() {
                                this.edit.nowDefault= 0;
                                this.isPop = true;
                                this.edit.isAdd = true;
                                this.edit.newAddress.id = 0;
                                this.edit.newAddress.receiveName = '';
                                this.edit.newAddress.receivePhone = '';
                                this.edit.newAddress.receiveRegion = '';
                                this.edit.newAddress.receiveDetail = '';
                                this.edit.newAddress.isDefault = 0;
                        },
                        updateAddress(address) {
                                this.isPop = true;
                                this.edit.isUpdate = true;
                                this.edit.newAddress.id = address.id;
                                this.edit.newAddress.receiveName = address.receiveName;
                                this.edit.newAddress.receivePhone = address.receivePhone;
                                this.edit.newAddress.receiveRegion = address.receiveRegion;
                                this.edit.newAddress.receiveDetail = address.receiveDetail;
                                this.edit.newAddress.isDefault = address.isDefault;
                        },
                        saveAddress() {
                                if(this.edit.isAdd) {
                                        this.$http({
                                                method: 'post',
                                                url: '/address/add',
                                                data: {
                                                        receiveName: this.edit.newAddress.receiveName,
                                                        receivePhone: this.edit.newAddress.receivePhone,
                                                        receiveRegion: this.edit.newAddress.receiveRegion,
                                                        receiveDetail: this.edit.newAddress.receiveDetail
                                                }
                                        })
                                                .then(data => {
                                                        this.edit.newAddress.id = data;
                                                        this.edit.newAddress.isDefault = this.edit.nowDefault;
                                                        this.addressList.push(JSON.parse(JSON.stringify(this.edit.newAddress)));
                                                        this._setDefaultInSaving(data);
                                                });
                                        alert('新增成功');
                                }
                                if(this.edit.isUpdate) {
                                        this.$http({
                                                method: 'post',
                                                url: '/address/update',
                                                data: {
                                                        id: this.edit.newAddress.id,
                                                        receiveName: this.edit.newAddress.receiveName,
                                                        receivePhone: this.edit.newAddress.receivePhone,
                                                        receiveRegion: this.edit.newAddress.receiveRegion,
                                                        receiveDetail: this.edit.newAddress.receiveDetail
                                                }
                                        })
                                                .then(data => {
                                                        const i = this.addressList.findIndex(item => item.id === this.edit.newAddress.id);
                                                        this.addressList.splice(i,1,JSON.parse(JSON.stringify(this.edit.newAddress)));
                                                });
                                        alert('修改成功');
                                }
                                this.isPop = false;
                                this.edit.isAdd = false;
                                this.edit.isEdit = false;
                        },
	                _setDefaultInSaving(id) {
                                this.addressList.forEach(item => item.isDefault = 0);
                                this.addressList.find(item => item.id === id).isDefault = 1;
                                this.$http({
                                        method: 'get',
                                        url: '/address/set_default/' + id
                                })
                                        .then(data => {});
	                },
                        changeDefault(address) {
                                this.addressList.forEach(item => item.isDefault = 0);
                                this.addressList.find(item => item.id === address.id).isDefault = 1;
                                this.$http({
                                        method: 'get',
                                        url: '/address/set_default/' + address.id,
                                })
                                        .then(response => {});
                        },
                        setDefault() {
                                this.edit.nowDefault = parseInt(this.edit.nowDefault === 0 ? '1' : '0');
                        },
                        deleteAddress() {
                                var i = this.addressList.findIndex(item => item.id === this.edit.newAddress.id);
                                this.addressList.splice(i,1);
                                this.isPop = false;
                                this.edit.isAdd = false;
                                this.edit.isUpdate = false;
                                this.$http({
                                        method: 'get',
                                        url: '/address/remove/' + this.edit.newAddress.id,
                                })
                                        .then(response => {});
                                alert('删除成功');
                        },
                        backList() {
                                this.isPop = false;
                                this.edit.isAdd = false;
                                this.edit.isUpdate = false;
                        }
                },
                created: function() {
                        // 发送ajax请求组件所需要的初始数据
                        this.$http({
                                method: 'get',
                                url: '/address/list'
                        })
                                .then(data => this.addressList = data );
                }
        };
</script>

<style  scoped>
	.mi-address {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.mi-address>.content-wrapper {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
	}

	.mi-address>.content-wrapper>.page-top {
		flex-shrink: 0;
		height: 45px;
		background-color: white;
		display: flex;
		justify-content: center;
		align-items: center;
		border-bottom: 2px solid rgba(191,191,192);
	}

	.mi-address>.content-wrapper>.page-top>span.title {
		flex-grow: 1;
		margin: 0 45px;
		text-align: center;
		color: rgba(51,51,51);
		font-size: 16px;
	}

	.mi-address>.content-wrapper>.page-top>img {
		position: absolute;
		left: 0;
		top: 0;
		width: 45px;
		height: 45px;
		color: black;
	}

	.mi-address>.content-wrapper>.page-content {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
	}

	.mi-address>.content-wrapper>.page-content.no {
		background-color: rgba(244,244,244);
	}

	.mi-address>.content-wrapper>.page-content.yes {
		background-color: white;
	}

	.page-content.no>.no-result {
		display: flex;
		flex-grow: 1;
		padding: 40px 0 166px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.page-content.no>.no-result>img {
		flex-shrink: 0;
		width: 90px;
	}

	.page-content.no>.no-result>span {
		flex-shrink: 0;
		padding-top: 10px;
		font-size: 12px;
		color: rgba(102,102,102);
	}

	.mi-address>.page-content.yes>ul.address {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
	}

	ul.address>li {
		flex-shrink: 0;
		height: 101px;
		border-bottom: 1px solid rgba(229,229,229);
		display: flex;
	}

	ul.address>li>.main {
		flex-shrink: 0;
		padding-left: 14px;
		width: 318px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	ul.address>li>.main>.top {
		flex-shrink: 0;
		height: 19px;
		display: flex;
		justify-content: space-between;
	}

	ul.address>li>.main>.top>span {
		font-size: 15px;
		color: rgba(51,51,51);
		line-height: 19px;
		flex-shrink: 0;
	}

	ul.address>li>.main>.bottom {
		flex-shrink: 0;
		height: 35px;
		display: flex;
		align-items: center;
		margin-top: 5px;
	}

	ul.address>li>.main>.bottom>.default {
		flex-shrink: 0;
		width: 30px;
		text-align: center;
		font-size: 12px;
		color: rgba(182,9,9);
		border: 1px solid black;
		padding: 0 4px;
		margin-right: 6px;
	}

	ul.address>li>.main>.bottom>.detail-address {
		flex-grow: 1;
		font-size: 12px;
		line-height: 18px;
		color: rgba(102,102,102);
		text-align: left;
	}

	ul.address>li>.edit {
		flex-grow: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	ul.address>li>.edit>img {
		width: 17px;
	}

	.mi-address>.content-wrapper>.page-footer {
		flex-shrink: 0;
		height: 44px;
		background-color: white;
		margin: 15px;
		border: 1px solid rgba(132,95,63);
		border-radius: 5px;
	}

	.mi-address>.content-wrapper>.page-footer>span {
		display: block;
		width: 100%;
		height: 100%;
		color: rgba(132,95,63);
		line-height: 44px;
		text-align: center;
	}

	.pop-content-wrapper {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.pop-content-wrapper>.pop-top {
		flex-shrink: 0;
		height: 45px;
		background-color: white;
		display: flex;
		justify-content: center;
		align-items: center;
		border-bottom: 2px solid rgba(191,191,192);
	}

	.pop-content-wrapper>.pop-top>span.title {
		flex-grow: 1;
		margin: 0 45px;
		text-align: center;
		color: rgba(51,51,51);
		font-size: 16px;
	}

	.pop-content-wrapper>.pop-top>img {
		position: absolute;
		left: 0;
		top: 0;
		width: 45px;
		height: 45px;
		color: black;
	}

	.pop-content-wrapper>.pop-content {
		flex-grow: 1;
		background-color: rgba(244,244,244);
		display: flex;
	}

	.pop-content-wrapper>.pop-content>.content {
		flex-grow: 1;
		height: 336px;
		display: flex;
		flex-direction: column;
	}

	.pop-content>.content>.name-wrapper {
		flex-shrink: 0;
		position: relative;
		height: 52px;
		padding: 0 20px;
		background-color: white;
		display: flex;
		align-items: center;
		border-bottom: 1px solid rgba(224,224,224);
	}

	.pop-content>.content>.name-wrapper>span.name {
		flex-shrink: 0;
		width: 80px;
		font-size: 13px;
		color: rgba(51,51,51);
	}

	.pop-content>.content>.name-wrapper>input.input-name {
		flex-grow: 1;
		font-size: 16px;
		color: rgba(51,51,51);
		height: 24px;
	}

	.pop-content>.content>.phone-wrapper {
		flex-shrink: 0;
		height: 52px;
		padding: 0 20px;
		position: relative;
		background-color: white;
		display: flex;
		align-items: center;
		border-bottom: 1px solid rgba(224,224,224);
	}

	.pop-content>.content>.phone-wrapper>span.phone {
		flex-shrink: 0;
		width: 80px;
		font-size: 13px;
		color: rgba(51,51,51);
	}

	.pop-content>.content>.phone-wrapper>input.input-phone {
		flex-grow: 1;
		color: rgba(51,51,51);
		font-size: 16px;
		height: 24px;
	}

	.pop-content>.content>.address-wrapper {
		flex-shrink: 0;
		height: 52px;
		padding: 0 20px;
		background-color: white;
		display: flex;
		align-items: center;
		border-bottom: 1px solid rgba(224,224,224);
	}

	.pop-content>.content>.address-wrapper>span.address {
		flex-shrink: 0;
		width: 80px;
		font-size: 13px;
		color: rgba(51,51,51);
	}

	.pop-content>.content>.address-wrapper>input {
		flex-grow: 1;
		font-size: 16px;
		color: rgba(51,51,51);
	}

	.pop-content>.content>.detail-address-wrapper {
		flex-shrink: 0;
		position: relative;
		height: 52px;
		padding: 0 20px;
		background-color: white;
		display: flex;
		align-items: center;
		border-bottom: 1px solid rgba(224,224,224);
	}

	.pop-content>.content>.detail-address-wrapper>span.detail-address {
		flex-shrink: 0;
		width: 80px;
		font-size: 13px;
		color: rgba(51,51,51);
	}

	.pop-content>.content>.detail-address-wrapper>input.input-address {
		flex-grow: 1;
		font-size: 16px;
		height: 24px;
		color: rgba(51,51,51);
	}

	.pop-content>.content>.set-default {
		margin-top: 7px;
		flex-shrink: 0;
		height: 52px;
		background-color: white;
		display: flex;
		align-items: center;
		padding: 0 20px;
	}

	.pop-content>.content>.set-default>img {
		flex-shrink: 0;
		width: 18px;
		height: 18px;
		margin-right: 5px;
	}


	.pop-content>.content>.set-default>span.text {
		flex-shrink: 0;
		width: 78px;
		line-height: 18px;
		font-size: 13px;
		color: rgba(0,0,0,0.8);
	}

	.pop-content>.content>.btn-wrapper {
		flex-shrink: 0;
		height: 56px;
		display: flex;
		justify-content: center;
		align-items: flex-end;
		margin-top: 7px;
	}

	.pop-content>.content>.btn-wrapper>span.btn-save {
		flex-shrink: 0;
		width: 80px;
		height: 36px;
		background-color: rgba(131,94,63);
		line-height: 36px;
		color: white;
		text-align: center;
	}

	.pop-content>.content>.btn-delete {
		flex-shrink: 0;
		height: 56px;
		padding: 0 20px;
		background-color: white;
		display: flex;
		justify-content: flex-start;
		margin-top: 7px;
		line-height: 56px;
	}

	.pop-content>.content>.btn-delete>span {
		flex-shrink: 0;
		color: rgba(227,13,13);
		font-size: 13px;
	}

	.gray {
		color: gray;
	}

	.pop-content>.content span.Validform_checktip.text {
		position: absolute;
		line-height: 16px;
		right: 20px;
		font-size: 16px;
		top: calc(50% - 8px);
	}

</style>