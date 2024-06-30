FIGMA di https://www.figma.com/design/mAb6JkDj9IaabtFucfmVJh/Mitra-Portal?node-id=0-1&t=y6KxP1mpPdHqr3gV-0

```
openapi: 3.0.0
info:
  title: Article Service API
  version: 1.0.0
paths:
  /categories:
    get:
      summary: Get Categories
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Category'
  /articles/top-4-latest:
    get:
      summary: Get Top 4 Latest Articles
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Article'
  /articles/top-5-trending:
    get:
      summary: Get Top 5 Trending Articles
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/TrendingArticle'
  /articles/latest:
    get:
      summary: Get Latest Articles (Paging, skip top 4)
      parameters:
        - name: limit
          in: query
          schema:
            type: integer
            default: 10
          description: Number of articles per page (default 10)
        - name: offset
          in: query
          schema:
            type: integer
            default: 4
          description: Number of articles to skip (default 4)
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Article'
  /tags/recommended:
    get:
      summary: Get Recommended Tags (max 10)
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/RecommendedTag'
  /articles/{article_id}:
    get:
      summary: Get Article by ID
      parameters:
        - name: article_id
          in: path
          required: true
          schema:
            type: integer
          description: Article ID
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Article'
  /tags/{tag}/related:
    get:
      summary: Get Related Tags by Tag
      parameters:
        - name: tag
          in: path
          required: true
          schema:
            type: string
          description: Tag name
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/RelatedTag'
  /articles/{article_id}/comments:
    get:
      summary: Get Comments by Article ID (Paging)
      parameters:
        - name: article_id
          in: path
          required: true
          schema:
            type: integer
          description: Article ID
        - name: limit
          in: query
          schema:
            type: integer
            default: 10
          description: Number of comments per page (default 10)
        - name: offset
          in: query
          schema:
            type: integer
            default: 0
          description: Number of comments to skip (default 0)
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Comment'
    post:
      summary: Post a Comment on an Article
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/NewComment'
      parameters:
        - name: article_id
          in: path
          required: true
          schema:
            type: integer
          description: Article ID
      responses:
        '201':
          description: Comment posted successfully
        '400':
          description: Invalid request body
    
  /articles/{article_id}/related-articles:
    get:
      summary: Get Related Articles by Article ID (max 3)
      parameters:
        - name: article_id
          in: path
          required: true
          schema:
            type: integer
          description: Article ID
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Article'
  /tags/{tag}/published-articles:
    get:
      summary: Get Published Articles by Tag (Paging, max 10)
      parameters:
        - name: tag
          in: path
          required: true
          schema:
            type: string
          description: Tag name
        - name: limit
          in: query
          schema:
            type: integer
            default: 10
          description: Number of articles per page (default 10)
        - name: offset
          in: query
          schema:
            type: integer
            default: 0
          description: Number of articles to skip (default 0)
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Article'
  /provinces/with-published-articles:
    get:
      summary: Get Provinces That Have Published Articles
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Province'
  /provinces/{prov_id}/kotas/with-published-articles:
    get:
      summary: Get Cities in a Province That Have Published Articles
      parameters:
        - name: prov_id
          in: path
          required: true
          schema:
            type: integer
          description: Province ID
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/City'
  /cities/{kota_id}/kecamatans/with-published-articles:
    get:
      summary: Get Districts in a City That Have Published Articles
      parameters:
        - name: kota_id
          in: path
          required: true
          schema:
            type: integer
          description: City ID
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/District'
  /districts/{kec_id}/kelurahans/with-published-articles:
    get:
      summary: Get Sub-districts in a District That Have Published Articles
      parameters:
        - name: kec_id
          in: path
          required: true
          schema:
            type: integer
          description: District ID
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Subdistrict'
components:
  schemas:
    Article:
      type: object
      properties:
        id:
          type: integer
        title:
          type: string
        content:
          type: string
        image_url:
          type: string
        status:
          type: string
        author_id:
          type: integer
        category_id:
          type: integer
        created_at:
          type: string
          format: date-time
        updated_at:
          type: string
          format: date-time
        prov_id:
          type: integer
        kota_id:
          type: integer
        kec_id:
          type: integer
        kel_id:
          type: integer
        published_at:
          type: string
          format: date-time
    TrendingArticle:
      type: object
      properties:
        id:
          type: integer
        title:
          type: string
        content:
          type: string
        image_url:
          type: string
        status:
          type: string
        author_id:
          type: integer
        category_id:
          type: integer
        created_at:
          type: string
          format: date-time
        updated_at:
          type: string
          format: date-time
        prov_id:
          type: integer
        kota_id:
          type: integer
        kec_id:
          type: integer
        kel_id:
          type: integer
        published_at:
          type: string
          format: date-time
        total_interactions:
          type: integer
    Category:
      type: object
      properties:
        id:
          type: integer
        name:
          type: string
    RecommendedTag:
      type: object
      properties:
        id:
          type: integer
        name:
          type: string
        usage_count:
          type: integer
    Province:
      type: object
      properties:
        id:
          type: integer
        prov_name:
          type: string
        zona_id:
          type: integer
    City:
      type: object
      properties:
        id:
          type: integer
        kota_name:
          type: string
    District:
      type: object
      properties:
        id:
          type: integer
        kecamatan_name:
          type: string
    Subdistrict:
      type: object
      properties:
        id:
          type: integer
        kelurahan_name:
          type: string
    Comment:
      type: object
      properties:
        id:
          type: integer
        content:
          type: string
        user_id:
          type: integer
        user_email:
          type: string
        created_at:
          type: string
          format: date-time
        updated_at:
          type: string
          format: date-time
    NewComment:
      type: object
      properties:
        content:
          type: string
        user_id:
          type: integer
        user_email:
          type: string
    RelatedTag:
      type: object
      properties:
        id:
          type: integer
        name:
          type: string
        article_count:
          type: integer
```
